"use client";

import { useState, useRef } from "react";
import { Plus, Trash2, Download, Upload, ChevronDown, ChevronUp } from "lucide-react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

interface BudgetItem {
  id: string;
  description: string;
  details?: string;
  quantity: number;
  price: number;
}

interface ClientInfo {
  name: string;
  date: string;
  project: string;
}

interface PageSettings {
  showBranding: boolean;
  showClientInfo: boolean;
  showTable: boolean;
  showPageSubtotal: boolean;
  showPageTotal: boolean;
  showGlobalSubtotal: boolean;
  showGrandTotal: boolean;
  showFooter: boolean;
}

interface PageConfig {
  id: string;
  items: BudgetItem[];
  settings: PageSettings;
  title: string;
}

export default function BudgetCalculator() {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: "",
    date: new Date().toISOString().split("T")[0],
    project: "",
  });
  const [validity, setValidity] = useState("15");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ref map for pages
  const pageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const defaultSettings: PageSettings = {
    showBranding: true,
    showClientInfo: true,
    showTable: true,
    showPageSubtotal: false,
    showPageTotal: false,
    showGlobalSubtotal: false,
    showGrandTotal: false,
    showFooter: true,
  };

  const [pages, setPages] = useState<PageConfig[]>([
    {
      id: "page-1",
      items: [
        { id: "1", description: "Servicio de Diseño Web", details: "Incluye diseño UX/UI, desarrollo frontend y backend básico.", quantity: 1, price: 5000 },
      ],
      settings: { ...defaultSettings, showGrandTotal: true, showPageSubtotal: true },
      title: "PRESUPUESTO",
    },
  ]);

  const [activePageId, setActivePageId] = useState<string>("page-1");

  // --- Actions ---

  const addPage = () => {
    const newPageId = `page-${crypto.randomUUID().slice(0, 4)}`;
    setPages([
      ...pages,
      {
        id: newPageId,
        items: [],
        settings: { ...defaultSettings, showBranding: false, showClientInfo: false, showTable: true },
        title: "PRESUPUESTO",
      },
    ]);
    setActivePageId(newPageId);
  };

  const removePage = (pageId: string) => {
    if (pages.length <= 1) return;
    const newPages = pages.filter((p) => p.id !== pageId);
    setPages(newPages);
    if (activePageId === pageId) {
      setActivePageId(newPages[0].id);
    }
  };

  const updatePageSettings = (pageId: string, setting: keyof PageSettings, value: boolean) => {
    setPages(
      pages.map((p) =>
        p.id === pageId ? { ...p, settings: { ...p.settings, [setting]: value } } : p
      )
    );
  };

  const updatePageTitle = (pageId: string, title: string) => {
    setPages(
      pages.map((p) => (p.id === pageId ? { ...p, title } : p))
    );
  };

  const addItemToPage = (pageId: string) => {
    setPages(
      pages.map((p) =>
        p.id === pageId
          ? {
            ...p,
            items: [
              ...p.items,
              {
                id: crypto.randomUUID(),
                description: "",
                details: "",
                quantity: 1,
                price: 0,
              },
            ],
          }
          : p
      )
    );
  };

  const removeItemFromPage = (pageId: string, itemId: string) => {
    setPages(
      pages.map((p) =>
        p.id === pageId
          ? { ...p, items: p.items.filter((item) => item.id !== itemId) }
          : p
      )
    );
  };

  const updateItem = (pageId: string, itemId: string, field: keyof BudgetItem, value: string | number) => {
    setPages(
      pages.map((p) =>
        p.id === pageId
          ? {
            ...p,
            items: p.items.map((item) =>
              item.id === itemId ? { ...item, [field]: value } : item
            ),
          }
          : p
      )
    );
  };

  // --- Calculations ---

  const calculatePageTotal = (page: PageConfig) => {
    return page.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const calculateGrandTotal = () => {
    return pages.reduce((acc, page) => acc + calculatePageTotal(page), 0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  // Calculates font size to fit single line
  const calculateTitleFontSize = (text: string) => {
    // Base size for "PRESUPUESTO" (11 chars) is approx 2.25rem (text-4xl)
    const baseSize = 2.25; // rem
    const baseLength = 12;

    if (text.length <= baseLength) return `${baseSize}rem`;

    // Scale down linearly
    const scale = baseLength / text.length;
    // Don't go smaller than 0.8rem to maintain minimum readability
    return `${Math.max(0.8, baseSize * scale)}rem`;
  };

  // --- Magic PDF ---

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const separator = "###THRTN_DATA_START###";

      if (content.includes(separator)) {
        try {
          const jsonStr = content.split(separator)[1];
          const data = JSON.parse(jsonStr);

          if (data.pages) {
            // Load pages and ensure title exists
            const loadedPages = data.pages.map((p: any) => ({
              ...p,
              title: p.title || "PRESUPUESTO"
            }));
            setPages(loadedPages);
          }
          // Backward compatibility for "Magic PDF v1"
          else if (data.items) {
            setPages([{
              id: "page-1",
              items: data.items,
              settings: {
                ...defaultSettings,
                showBranding: data.showBranding ?? true,
                showGrandTotal: true
              },
              title: "PRESUPUESTO"
            }]);
          }

          if (data.clientInfo) setClientInfo(data.clientInfo);
          if (data.validity) setValidity(data.validity);

          alert("Presupuesto cargado exitosamente.");
        } catch (error) {
          console.error("Error parsing PDF data:", error);
          alert("El archivo no contiene datos válidos o está dañado.");
        }
      } else {
        alert("Este PDF no es un presupuesto editable de THRTN.");
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // --- PDF Generation ---

  const handleDownloadPDF = async () => {
    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "letter",
      });

      const imgWidth = 216; // Letter width in mm (approx 8.5 inches)

      // Iterate through all pages
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const element = pageRefs.current[page.id];

        if (element) {
          if (i > 0) pdf.addPage();

          // Generate image for this specific page
          const dataUrl = await toPng(element, {
            cacheBust: true,
            pixelRatio: 2,
            backgroundColor: "#030202"
          });

          const img = new Image();
          img.src = dataUrl;
          await new Promise((resolve) => { img.onload = resolve; });

          // We assume page content fits in Letter as per the preview container, 
          // but we calculate ratio to fit width exactly
          const imgHeight = (img.height * imgWidth) / img.width;

          pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
        }
      }

      // Magic PDF: Embed state data
      const stateData = {
        pages,
        clientInfo,
        validity,
      };

      const jsonStr = JSON.stringify(stateData);
      const separator = "###THRTN_DATA_START###";
      const pdfBlob = pdf.output("blob");
      const finalBlob = new Blob([pdfBlob, separator, jsonStr], { type: "application/pdf" });
      const url = URL.createObjectURL(finalBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `presupuesto-${clientInfo.name || "cliente"}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Hubo un error al generar el PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "Inspiban0305") {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030202] text-white p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-display text-primary uppercase tracking-widest">THRTN</h1>
            <p className="text-white/40 text-sm">Acceso Restringido</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-center tracking-widest placeholder:tracking-normal focus:border-primary focus:outline-none transition-colors"
                placeholder="Contraseña de acceso"
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-xs text-center animate-pulse">
                  Contraseña incorrecta
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-medium py-3 rounded-lg hover:bg-white transition-colors"
            >
              INGRESAR
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-8 p-4">
      {/* HEADER CONTROLS */}
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-white/5 gap-4">
        <h2 className="text-2xl font-display text-foreground">Constructor de Presupuestos</h2>

        <div className="flex items-center gap-6">
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <Upload size={16} />
            <span>Cargar PDF</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded font-medium hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <span className="animate-pulse">Generando...</span>
            ) : (
              <>
                <Download size={18} />
                <span>Descargar PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 items-start">

        {/* === EDITOR PANEL (LEFT) === */}
        <div className="w-full xl:w-1/2 space-y-8">

          {/* GLOBAL SETTINGS */}
          <div className="bg-surface border border-white/5 p-6 rounded-xl space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-primary/80 font-medium">Información General</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/40 mb-1">Cliente</label>
                <input
                  type="text"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded p-2 text-foreground focus:border-primary focus:outline-none"
                  placeholder="Nombre Cliente"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1">Proyecto</label>
                <input
                  type="text"
                  value={clientInfo.project}
                  onChange={(e) => setClientInfo({ ...clientInfo, project: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded p-2 text-foreground focus:border-primary focus:outline-none"
                  placeholder="Nombre Proyecto"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1">Fecha</label>
                <input
                  type="date"
                  value={clientInfo.date}
                  onChange={(e) => setClientInfo({ ...clientInfo, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded p-2 text-foreground focus:border-primary focus:outline-none [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1">Validez (Días)</label>
                <input
                  type="number"
                  min="1"
                  value={validity}
                  onChange={(e) => setValidity(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded p-2 text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* PAGE MANAGER */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display">Páginas</h3>
              <button
                onClick={addPage}
                className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
              >
                <Plus size={16} />
                Nueva Página
              </button>
            </div>

            <div className="space-y-6">
              {pages.map((page, index) => (
                <div
                  key={page.id}
                  className={`bg-surface border transition-all duration-300 rounded-xl overflow-hidden ${activePageId === page.id ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-white/5 opacity-80 hover:opacity-100'}`}
                >
                  {/* Page Header */}
                  <div
                    className="bg-white/5 p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => setActivePageId(page.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono bg-white/10 text-white px-2 py-1 rounded">Pág {index + 1}</span>
                      <span className="text-sm font-medium text-white/80">{page.title || "Presupuesto"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); removePage(page.id); }}
                        className="p-1 hover:text-red-500 text-white/20 transition-colors"
                        title="Eliminar página"
                      >
                        <Trash2 size={14} />
                      </button>
                      {activePageId === page.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>

                  {/* Page Body (Only visible if active) */}
                  {activePageId === page.id && (
                    <div className="p-4 space-y-6 animate-fade-in">

                      {/* Page Title Input */}
                      <div>
                        <label className="block text-xs text-white/40 mb-1">Título de la Página</label>
                        <input
                          type="text"
                          value={page.title}
                          onChange={(e) => updatePageTitle(page.id, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded p-2 text-foreground focus:border-primary focus:outline-none uppercase font-medium tracking-wide"
                          placeholder="PRESUPUESTO"
                        />
                        <p className="text-[10px] text-white/30 mt-1">El tamaño del texto se ajustará automáticamente.</p>
                      </div>

                      {/* Toggles */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { key: 'showBranding', label: 'Branding' },
                          { key: 'showClientInfo', label: 'Info Cliente' },
                          { key: 'showTable', label: 'Tabla Items' },
                          { key: 'showPageSubtotal', label: 'Subtotal Pág' },
                          { key: 'showGlobalSubtotal', label: 'Subtotal Global' },
                          { key: 'showPageTotal', label: 'Total Pág' },
                          { key: 'showGrandTotal', label: 'Total Global' },
                          { key: 'showFooter', label: 'Footer' },
                        ].map((setting) => (
                          <label key={setting.key} className="flex items-center gap-2 cursor-pointer group select-none">
                            <input
                              type="checkbox"
                              checked={page.settings[setting.key as keyof PageSettings] ?? false}
                              onChange={(e) => updatePageSettings(page.id, setting.key as keyof PageSettings, e.target.checked)}
                              className="w-3 h-3 rounded border-white/20 bg-white/5 checked:bg-primary focus:ring-primary text-primary"
                            />
                            <span className="text-xs text-white/50 group-hover:text-white transition-colors">{setting.label}</span>
                          </label>
                        ))}
                      </div>

                      {/* Items Editor (If table enabled) */}
                      {page.settings.showTable && (
                        <div className="space-y-3 pt-4 border-t border-white/5">
                          <div className="flex justify-between items-center">
                            <h4 className="text-xs uppercase tracking-widest text-primary/60">Conceptos de la página</h4>
                            <button
                              onClick={() => addItemToPage(page.id)}
                              className="text-xs flex items-center gap-1 text-primary hover:text-white"
                            >
                              <Plus size={12} /> AGREGAR
                            </button>
                          </div>

                          <div className="space-y-2">
                            {page.items.map((item) => (
                              <div key={item.id} className="grid grid-cols-[1fr_50px_70px_auto] gap-2 items-start bg-white/5 p-2 rounded border border-white/5 text-xs">
                                <div className="space-y-1">
                                  <input
                                    value={item.description}
                                    onChange={(e) => updateItem(page.id, item.id, "description", e.target.value)}
                                    className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none"
                                    placeholder="Descripción"
                                  />
                                  <textarea
                                    value={item.details || ""}
                                    onChange={(e) => updateItem(page.id, item.id, "details", e.target.value)}
                                    className="w-full bg-transparent text-white/40 focus:text-white outline-none resize-none h-auto overflow-hidden"
                                    placeholder="Detalles..."
                                    rows={1}
                                  />
                                </div>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => updateItem(page.id, item.id, "quantity", parseInt(e.target.value) || 0)}
                                  className="bg-transparent text-center border-b border-white/10 focus:border-primary outline-none"
                                  placeholder="#"
                                />
                                <input
                                  type="number"
                                  value={item.price}
                                  onChange={(e) => updateItem(page.id, item.id, "price", parseFloat(e.target.value) || 0)}
                                  className="bg-transparent text-right border-b border-white/10 focus:border-primary outline-none"
                                  placeholder="$"
                                />
                                <button
                                  onClick={() => removeItemFromPage(page.id, item.id)}
                                  className="text-white/20 hover:text-red-500"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            ))}
                            {page.items.length === 0 && (
                              <p className="text-center text-white/20 text-xs py-2 italic">Sin conceptos</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === PREVIEW PANEL (RIGHT) === */}
        <div className="w-full xl:w-1/2 flex flex-col items-center gap-8 bg-black/20 p-8 rounded-xl border border-white/5 min-h-screen overflow-y-auto">
          <div className="sticky top-0 z-10 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/10 text-xs text-white/60 mb-4">
            VISTA PREVIA DE IMPRESIÓN
          </div>

          {pages.map((page, index) => (
            <div key={page.id} className="relative group">
              <div className="absolute -left-12 top-0 text-xs text-white/20 font-mono rotate-90 origin-top-right mt-8">PÁGINA {index + 1}</div>

              {/* Letter Container Wrapper for Scale */}
              <div className="origin-top scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.6] 2xl:scale-[0.7]">
                <div
                  ref={(el) => { if (el) pageRefs.current[page.id] = el; }}
                  className="w-[816px] h-[1056px] bg-[#030202] text-foreground p-12 relative flex flex-col shadow-2xl overflow-hidden" // Captured Element - No Scale
                  style={{ width: "816px", height: "1056px" }}
                >
                  {/* Header Branding */}
                  <div className="h-[88px] mb-6 shrink-0">
                    {page.settings.showBranding && (
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h1
                            className="font-display text-primary whitespace-nowrap transition-all duration-300 uppercase"
                            style={{ fontSize: calculateTitleFontSize(page.title || "PRESUPUESTO") }}
                          >
                            {page.title || "PRESUPUESTO"}
                          </h1>
                          <p className="text-white/60 text-sm">THRTN | Ecosistemas Digitales Inteligentes</p>
                        </div>
                        <div className="text-right text-sm text-white/40 space-y-1">
                          <p>contacto@thrtn.co</p>
                          <p>+52 3123743960</p>
                          <p>www.thrtn.co</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Client Info */}
                  {page.settings.showClientInfo && (
                    <div className="grid grid-cols-2 gap-8 mb-8 shrink-0">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-primary/60 mb-2">Cliente</h4>
                        <p className="text-xl font-medium">{clientInfo.name || "---"}</p>
                        <p className="text-white/60 text-base">{clientInfo.project || "---"}</p>
                      </div>
                      <div className="text-right">
                        <h4 className="text-xs uppercase tracking-widest text-primary/60 mb-2">Fecha de Emisión</h4>
                        <p className="text-xl font-medium">{clientInfo.date}</p>
                        <p className="text-white/60 text-base">Validez: {validity || 15} días</p>
                      </div>
                    </div>
                  )}

                  {/* Content Area (Flexible) */}
                  <div className="flex-grow flex flex-col">
                    {page.settings.showTable && (
                      <div className="w-full mb-auto">
                        <div className="grid grid-cols-[1fr_80px_120px_120px] gap-4 border-b border-white/20 pb-2 mb-2 text-xs uppercase tracking-widest text-white/80">
                          <div>Descripción</div>
                          <div className="text-center">Cant.</div>
                          <div className="text-right">Precio Unit.</div>
                          <div className="text-right">Total</div>
                        </div>
                        <div className="space-y-4">
                          {page.items.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-[1fr_80px_120px_120px] gap-4 text-base py-3 border-b border-white/5 items-start">
                              <div className="space-y-1">
                                <div className="text-white/90 font-medium">{item.description}</div>
                                {item.details && (
                                  <div className="text-sm text-white/50 whitespace-pre-wrap">{item.details}</div>
                                )}
                              </div>
                              <div className="text-center text-white/60">{item.quantity}</div>
                              <div className="text-right text-white/60">{formatCurrency(item.price)}</div>
                              <div className="text-right font-medium text-white">{formatCurrency(item.quantity * item.price)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Totals Section */}
                    <div className="mt-auto pt-8">
                      <div className="w-full max-w-[300px] ml-auto space-y-2">

                        {/* Page Subtotal */}
                        {page.settings.showPageSubtotal && (
                          <div className="flex justify-between text-white/60 text-base border-t border-white/10 pt-2">
                            <span>Subtotal Página</span>
                            <span>{formatCurrency(calculatePageTotal(page))}</span>
                          </div>
                        )}

                        {/* Global Subtotal */}
                        {page.settings.showGlobalSubtotal && (
                          <div className="flex justify-between text-white/60 text-base border-t border-white/10 pt-2">
                            <span>Subtotal Global</span>
                            <span>{formatCurrency(calculateGrandTotal())}</span>
                          </div>
                        )}

                        {/* Page Total */}
                        {page.settings.showPageTotal && (
                          <div className="flex justify-between items-center pt-2 text-white border-t border-white/10">
                            <span className="font-medium text-lg">Total Página</span>
                            <span className="font-medium text-lg">{formatCurrency(calculatePageTotal(page))}</span>
                          </div>
                        )}

                        {/* Grand Total */}
                        {page.settings.showGrandTotal && (
                          <div className="flex justify-between items-center pt-4 border-t border-primary/30 text-primary mt-2">
                            <span className="font-display text-xl">Total Final</span>
                            <span className="text-3xl font-medium">{formatCurrency(calculateGrandTotal())}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* App Footer */}
                  {page.settings.showFooter && (
                    <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/30 h-[40px] shrink-0">
                      <p>Este presupuesto tiene validez informativa. Gracias por su confianza.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add Page Shortcut at bottom of preview */}
          <button
            onClick={addPage}
            className="w-[200px] h-[60px] border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-white/20 hover:text-white hover:border-white/30 transition-colors"
          >
            <Plus size={24} />
          </button>
        </div>

      </div>
    </div>
  );
}

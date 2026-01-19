
import BudgetCalculator from "@/components/BudgetCalculator";

export default function BudgetPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary uppercase tracking-wide">
                    Calculadora de <br /> Presupuestos
                </h1>
                <p className="text-white/50 max-w-lg mx-auto text-lg leading-relaxed">
                    Genera cotizaciones profesionales al instante alineadas a la identidad de THRTN.
                </p>
            </div>

            <BudgetCalculator />
        </main>
    );
}

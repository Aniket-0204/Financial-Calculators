function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
            <h1 className="text-3xl font-bold text-slate-100">About Ukuaris</h1>

            <div className="prose prose-invert prose-lg text-slate-300">
                <p>
                    Ukuaris is designed to empower everyday investors with simple, transparent, and powerful financial tools.
                    Whether you are starting your wealth creation journey with a Systematic Investment Plan (SIP) or
                    planning your retirement income with a Systematic Withdrawal Plan (SWP), our calculators provide
                    the clarity you need.
                </p>
                <p>
                    We believe that financial literacy is the key to financial freedom. By visualizing your
                    investments and withdrawals, you can make informed decisions that align with your long-term goals.
                </p>

                <h2 className="text-xl font-semibold text-slate-100 mt-8 mb-4">Our Mission</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>simplify complex financial calculations.</li>
                    <li>Provide easy-to-understand visualizations of wealth growth.</li>
                    <li>Help users plan for both accumulation and distribution phases of wealth.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;

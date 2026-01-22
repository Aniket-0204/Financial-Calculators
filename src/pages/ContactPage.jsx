import { Mail } from "lucide-react";

function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
            <h1 className="text-3xl font-bold text-slate-100">Contact Us</h1>

            <div className="prose prose-invert prose-lg text-slate-300">
                <p>
                    We appreciate your interest in Ukuaris. If you have any questions, suggestions, or feedback regarding our
                    financial calculators, please don't hesitate to reach out.
                </p>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 mt-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-primary-600/20 p-4 rounded-full text-primary-400">
                        <Mail className="w-8 h-8" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-slate-100 mb-2">Email Us</h3>
                        <p className="text-slate-400 mb-4">
                            For general inquiries and support:
                        </p>
                        <a
                            href="mailto:support@ukuaris.com"
                            className="text-primary-400 hover:text-primary-300 font-medium text-lg transition-colors"
                        >
                            ukuaris@gmail.com
                        </a>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-100 mb-4">Response Time</h3>
                    <p>
                        We strive to respond to all inquiries within 24-48 hours. Please note that we are a small team,
                        and your patience is appreciated.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;

import { Link } from "react-router";

function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} Ukuaris. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link to="/definitions" className="text-slate-400 hover:text-primary-500 text-sm transition-colors ">
                            Definitions
                        </Link>
                        <Link to="/disclaimer" className="text-slate-400 hover:text-primary-500 text-sm transition-colors">
                            Disclaimer
                        </Link>
                        <Link to="/privacy-policy" className="text-slate-400 hover:text-primary-500 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-slate-400 hover:text-primary-500 text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="/contact" className="text-slate-400 hover:text-primary-500 text-sm transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

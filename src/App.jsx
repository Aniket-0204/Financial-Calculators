import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';


import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Loading from './components/Loading';

// --- 1. Lazy Load Heavy Components (Calculators) ---
const SIPcalculator = lazy(() => import('./pages/SIPcalculator'));
const SWPcalculator = lazy(() => import('./pages/SWPcalculator'));
const LumpsumCalculator = lazy(() => import('./pages/LumpsumCalculator'));
const EMICalculator = lazy(() => import('./pages/EMICalculator'));

// --- 2. Lazy Load Secondary Pages (Marketing/Info) ---
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DefinitionsPage = lazy(() => import('./pages/DefinitionsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// --- 3. Optional: Eagerly load Legal (Small files, better for SEO) ---
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { AlertCircle, RefreshCw } from 'lucide-react';

// Modern Error Fallback
function ErrorFallback({ error, resetErrorBoundary }) {
  // Check if it's a chunk loading error (common after deployments)
  const isChunkError = error?.message?.includes('chunk') || error?.name === 'ChunkLoadError';

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-slate-900/30 rounded-3xl border border-slate-800 backdrop-blur-sm mx-4 my-8">
      <div className="bg-red-500/10 p-4 rounded-full mb-6">
        <AlertCircle className="w-12 h-12 text-red-400" />
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mb-3">Oops! Something went wrong</h2>
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        {isChunkError
          ? "A new version of the application is available. Please reload to get the latest updates."
          : "We encountered an unexpected issue while loading this section. This is usually temporary."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          Reload Website
        </button>

        <button
          onClick={resetErrorBoundary}
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl transition-all"
        >
          Try Again
        </button>
      </div>

      <p className="mt-8 text-xs text-slate-600 uppercase tracking-widest font-medium">
        UKUARIS CALCULATORS
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
        <Navbar />

        <div className="flex flex-grow justify-center">
          {/* Main Content (Left) */}
          <main className="flex-grow w-full max-w-7xl">

            {/* Functional Error Boundary catches chunk loading failures */}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {/* Suspense handles the loading state for lazy components */}
              <Suspense fallback={<Loading />}>
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/calculators/sip" element={<SIPcalculator />} />
                  <Route path="/calculators/swp" element={<SWPcalculator />} />
                  <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
                  <Route path="/calculators/emi" element={<EMICalculator />} />

                  {/* Information Routes */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/definitions" element={<DefinitionsPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Legal Routes (Already loaded) */}
                  <Route path="/disclaimer" element={<DisclaimerPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  {/* Redirects */}
                  <Route path="/sip" element={<Navigate to="/calculators/sip" replace />} />
                  <Route path="/swp" element={<Navigate to="/calculators/swp" replace />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>

          {/* Sidebar (Right) */}
          <Sidebar />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

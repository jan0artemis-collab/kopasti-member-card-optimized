import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingScreen } from './components/Loading';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const MemberPage = lazy(() => import('./pages/MemberPage'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingScreen message="Memuat halaman..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member/:id" element={<MemberPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Halaman tidak ditemukan
        </p>
        <a
          href="/"
          className="inline-block bg-tni-green hover:bg-tni-green/90 text-white font-semibold py-2 px-6 rounded transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default App;

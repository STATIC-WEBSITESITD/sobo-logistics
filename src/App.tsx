/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Documents from './pages/Documents';
import About from './pages/About';

// Service Sub-pages
import InternationalCourier from './pages/services/International';
import AirFreight from './pages/services/AirFreight';
import DGRHandling from './pages/services/DGR';
import CommercialShipments from './pages/services/Commercial';
import DocumentsHandling from './pages/services/DocumentsHandling';
import DomesticCourier from './pages/services/Domestic';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.TRACKING} element={<Tracking />} />
            <Route path={ROUTES.SERVICES.ROOT} element={<Services />} />
            <Route path={ROUTES.SERVICES.INTERNATIONAL} element={<InternationalCourier />} />
            <Route path={ROUTES.SERVICES.AIR_FREIGHT} element={<AirFreight />} />
            <Route path={ROUTES.SERVICES.DGR} element={<DGRHandling />} />
            <Route path={ROUTES.SERVICES.COMMERCIAL} element={<CommercialShipments />} />
            <Route path={ROUTES.SERVICES.DOCUMENTS} element={<DocumentsHandling />} />
            <Route path={ROUTES.SERVICES.DOMESTIC} element={<DomesticCourier />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.QUOTE} element={<Quote />} />
            <Route path={ROUTES.DOCUMENTS} element={<Documents />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

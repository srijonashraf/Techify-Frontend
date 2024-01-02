import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation";
import NotFoundPage from "./pages/404Page";
import AccountRegistrationPage from "./pages/AccountRegistrationPage";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Contacts from "./pages/Contacts";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import Homepage from "./pages/Homepage";
import PrivacyPolicyAndTermsOfUse from "./pages/PrivacyPolicyAndTermsOfUse";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import SearchResultsPage from "./pages/SearchResultsPage";
import ThankYouPage from "./pages/ThankYouPage";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/policy"
            element={<PrivacyPolicyAndTermsOfUse />}
          ></Route>
          <Route
            path="/registration"
            element={<AccountRegistrationPage />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/review" element={<Reviews />}></Route>
          <Route path="/search" element={<SearchResultsPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/faq" element={<FrequentlyAskedQuestions />}></Route>
          <Route path="/notfound" element={<NotFoundPage />}></Route>
          <Route path="/thankYouPage" element={<ThankYouPage />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

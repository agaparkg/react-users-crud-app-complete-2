import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Users */}
      <Users />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

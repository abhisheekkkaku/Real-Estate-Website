import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Cards from "./Cards";
import SearchList from "./SearchList";
import Footer from "./Footer";
import { useState } from "react";
import SmallCards from "./SmallCards";
import QuestionBox from "./QuestionBox";
import FavourateList from "./FavourateList";

const PropertiesData = [
  {
    Id: 1,
    Title: "Luxury Homes",
    Text: " Anand Niketan, New Delhi.",
    Bhk: "1",
    BhkRange: "1-3",
    Budget: "3000000",
    BudgetRange: "4999999",
    Type: "Near metro, Hospital, Market, School",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnY1ZGg6KhSfJyYV2fWvLxxCjoU5McAbmTw&usqp=CAU",
  },

  {
    Id: 2,
    Title: "Farm Side Apartments",
    Text: "Chhattarpur, Mumbai",
    Bhk: "2",
    BhkRange: "1-3",
    Budget: "4500000",
    BudgetRange: "4999999",
    Type: "Near metro, Hospital, Market, School",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnJSJ4b1mUy8BZMEJVS1hmyI7YybvIfDTIQ&usqp=CAU",
  },

  {
    Id: 3,
    Title: "Premium Builder Floor",
    Text: "Satya Bhag, Udaipur",
    Bhk: "3",
    BhkRange: "1-3",
    Budget: "6500000",
    BudgetRange: "5000000-7000000",
    Type: "Near metro, Hospital, Market, School",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-wIjq6afesK7yRkLwZJ8OP4NBiNailLDRA&usqp=CAU",
  },

  {
    Id: 4,
    Title: " Premium Luxury Home",
    Text: "Malviya Nagar, Noida",
    Bhk: "4",
    BhkRange: "3-5",
    Budget: "8500000",
    BudgetRange: "7000000-10000000",
    Type: "Near metro, Hospital, Market, School",
    URL: "data:image/jpeg;base64,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",
  },

  {
    Id: 5,
    Title: "Syom Apartment",
    Text: "Rajpur Road, Dehradun",
    Bhk: "2",
    BhkRange: "1-3",
    Budget: "10000000",
    BudgetRange: "7000000-10000000",
    Type: "Near metro, Hospital, Market, School",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZLA4kI6iHgf1F8isn425Q5zLC_2IRy45_g&usqp=CAU",
  },
  
  {
    Id: 6,
    Title: "South Delhi Luxury Floors",
    Text: "Greater Kailash, New Delhi",
    Bhk: "5",
    BhkRange: "3-5",
    Budget: "20000000",
    BudgetRange: "10000000-20000000",
    Type: "Near metro, Hospital, Market, School",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-wIjq6afesK7yRkLwZJ8OP4NBiNailLDRA&usqp=CAU",
  },
];

function App() {
  const [Properties, SetProperties] = useState(PropertiesData);
  const [FilteredProperties, SetFilteredProperties] = useState(PropertiesData);
  const [Favourates, SetFavourates] = useState([]);
  const [showFavourate, SetShowFavourates] = useState(false);

  const favourates = (id) => {
    const fav = Properties.find((p) => p.Id == id);
    SetFavourates([...Favourates, fav]);
  };

  const gotofavourates = () => {
    SetShowFavourates(!showFavourate);
  };

  const search = (filters) => {
    const filteredProperties = Properties.filter(
      (p) =>
        p.Text.indexOf(
          filters.filters.location === "" ||
            filters.filters.location === undefined
            ? p.Text
            : filters.filters.location
        ) > -1 &&
        p.Type.indexOf(
          filters.filters.propertyType === "" ||
            filters.filters.propertyType === undefined
            ? p.Type
            : filters.filters.propertyType
        ) > -1 &&
        p.BudgetRange ===
          (filters.filters.budget === "" || filters.filters.budget === undefined
            ? p.BudgetRange
            : filters.filters.budget) &&
        p.BhkRange ===
          (filters.filters.bhk === "" || filters.filters.bhk === undefined
            ? p.BhkRange
            : filters.filters.bhk)
    );
    SetFilteredProperties(filteredProperties);
  };

  const content = (showFavourate) => {
    let text;
    if (showFavourate == true) {
      text = (
        <>
          <FavourateList favourates={Favourates} />
        </>
      );
    } else {
      text = (
        <>
          <SearchList search={search} />
          <Cards properties={FilteredProperties} favourates={favourates} />
        </>
      );
    }
    return text;
  };
  return (
    <div className="App">
      <Navbar gotofavourates={gotofavourates} />
      {content()}
      <SmallCards />
      <QuestionBox />
      <Footer />
    </div>
  );
}
export default App;

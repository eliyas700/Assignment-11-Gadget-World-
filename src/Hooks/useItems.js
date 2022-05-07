import { useEffect, useState } from "react";

const useItems = () => {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://infinite-ridge-60614.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  return [items, setItems, isLoading];
};
export default useItems;

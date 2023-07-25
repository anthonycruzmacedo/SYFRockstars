import "./App.css";
import iPhone from "./utils/iPhone.png";
import {
  List,
  ListItem,
  Select,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function App() {
  return (
    <div className="h-screen w-screen bg-[#34657F] flex flex-row">
      {/* iPhone content div */}

      <div className="h-full flex pl-[25%] justify-center items-center">
        {/* iPhone template */}
        <img
          src={iPhone}
          alt="iPhone"
          className="absolute bg-transparent h-[550px] w-[540px] z-10 translate-x-[6px]"
        />

        {/* iPhone white background */}
        <div className="bg-white h-[525px] w-[250px] rounded-[15%] z-0"></div>
      </div>

      <div className="w-[350px] flex justify-center items-center ml-[10%]">
        <Card className="h-3/5 w-4/5 shadow-black shadow-xl p-5 !rounded-xl">
          <Typography>
            <h1 className="font-bold font-sans">Customer Payment Info</h1>
          </Typography>
          <List>
            <ListItem></ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}

export default App;

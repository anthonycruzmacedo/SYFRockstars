import "./App.css";
import iPhone from "./utils/iPhone.png";
import Logo from "./utils/AuthPage/SYF Logo.png";
import Clock from "./utils/AuthPage/Clock.png";
import GreenX from "./utils/AuthPage/Green X.png";
import RedX from "./utils/AuthPage/Red X.png";
import PersonIcon from "./utils/AuthPage/Person Icon.png";
import MapPin from "./utils/AuthPage/Map Pin.svg";

import {
  List,
  ListItem,
  Select,
  TextField,
  Card,
  CardContent,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

function App() {
  // const names = ["Harsh", "Grant", "Madison", "Shubham", "Anthony"];
  const fieldTitle = [
    "Cardholder Name",
    "Store",
    "Latitude",
    "Longitude",
    "Amount",
  ];

  const City = "Champaign";
  const State = "IL";

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
        <div className="absolute">
          <Card className="!rounded-[15%]">
            <div className="flex flex-col justify-center items-center w-[250px] h-[525px]">
              <img className="w-1/3" alt="SYF Logo" src={Logo} />
              <img className="w-3/5" alt="Person Icon" src={PersonIcon} />

              <div className="flex flex-row">
                <img className="w-[14px] my-2" alt="Map Pin" src={MapPin} />
                <p className="text-sm">
                  Near {City}, {State} <br />
                  <span className="my-0 text-[10px] text-blue-500 font-semibold">
                    {" "}
                    More Info
                  </span>
                </p>
              </div>
              <img className="w-[14px] my-2" alt="Clock" src={Clock} />

              <div className="flex flex-row w-full justify-evenly">
                <div className="w-2/5 flex flex-col items-center">
                  <img className="w-1/2" alt="Green Check" src={GreenX} />
                  <p className="text-center font-sans text-xs">Yes, it's me</p>
                </div>
                <div className="w-2/5 flex flex-col items-center">
                  <img className="w-1/2" alt="Red X" src={RedX} />
                  <p className="text-center font-sans text-xs">
                    No, it's not me
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="w-[350px] flex flex-col items-center justify-center ml-[10%]">
        <Card className="h-4/5 w-4/5 shadow-black shadow-xl !rounded-xl flex flex-col items-center justify-evenly">
          {/* Control Title */}
          <Typography>
            <h1 className="pl-4 pt-4 pb-0 mb-0 font-bold font-sans">
              Customer Payment Info
            </h1>
          </Typography>

          <List>
            {/* <p className="pl-4">Cardholder Name</p>
            <ListItem>
              <FormControl className="w-full">
                <InputLabel className="bg-white">Cardholder Name</InputLabel>
                <Select className="!py-0 !my-0 h-[36px]" props={names}>
                  {names.map((x) => (
                    <MenuItem value={x}>{x}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem> */}
            {fieldTitle.map((title) => (
              <div className="mb-8 h-[36px]">
                <p className="pl-4 font-semibold font-sans">{title}</p>
                <ListItem className="w-full !py-0">
                  <TextField size="small" className="w-full !py-0 h-[12px]" />
                </ListItem>
              </div>
            ))}
          </List>
          <Button className=" !bg-blue-300 !rounded-lg pb-4">
            Initiate Payment
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;

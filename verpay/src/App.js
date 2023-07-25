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
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

function App() {
  const names = ["Harsh", "Grant", "Madison", "Shubham", "Anthony"];
  const fieldTitle = ["Cardholder Name", "Store", "Location", "Date", "Amount"];

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

      <div className="w-[350px] flex flex-col items-center justify-center ml-[10%]">
        <Card className="h-4/5 w-4/5 shadow-black shadow-xl !rounded-xl flex flex-col items-center justify-evenly">
          {/* Control Title */}
          <Typography>
            <h1 className="pl-4 pt-4 pb-0 mb-0 font-bold font-sans">
              Customer Payment Info
            </h1>
          </Typography>

          <List className="">
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
                <p className="pl-4">{title}</p>
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

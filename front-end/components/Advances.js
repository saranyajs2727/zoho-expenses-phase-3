import { ArrowDropDown } from "@mui/icons-material";
import Image from "next/image";
import React, {  useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Reports.module.css";
import HomeImage from "../public/home.png";
import LifeCycle from "../public/lifecycle.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { display } from "@mui/system";

export default function Advances() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const [select, setSelect] = useState(true);
  const [select1, setSelect1] = useState(false);
  const [head, setHead] = useState("All");
  const [dialogopen, setDialogOpen] = useState(false);
  const [amount, setamount] = useState("");
  const [reference, setreference] = useState("");
  const [businessPurpose, setBusinessPurpose] = useState("");
  const [trip, setTrip ]= useState("");
  const [currency, setCurrency ]= useState("");
  const [cash, setCash ]= useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pay, setPay] = useState([]);
  const [trips, setTrips] = useState([]);
  const [names, setNames] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [starts, setStarts] = useState([]);
  const [ends, setEnds] = useState([]);
  const [depoist, setDepoist]= useState("");
  const [currencies, setcurrencies ]= useState("");

  const handleDelete = (index) => {
    const updatedpay = pay.filter((name, position) => index != position);
    const updatedtrips = trips.filter((name, position) => index != position);
    const updatednames = names.filter((name, position) => index != position);
    const updateddepoist = depoist.filter((name, position) => index != position);
    const updatedpurposes = purposes.filter(
      (name, position) => index != position
    );
    const updatedstarts = starts.filter((name, position) => index != position);
    const updatedends = ends.filter((name, position) => index != position);
    const updatedcurrencies= currencies.filter((name, position) => index != position);
    setPay(updatedpay);
    setDepoist(updateddepoist);
    setTrips(updatedtrips);
    setNames(updatednames);
    setPurposes(updatedpurposes);
    setStarts(updatedstarts);
    setEnds(updatedends);
    setcurrencies(updatedcurrencies);
  };

  const handleData = () => {
    setPay([...pay,amount])
    setNames([...names, reference]);
    setTrips([...trips,trip])
    setDepoist([...depoist,cash])
    setPurposes([...purposes, businessPurpose]);
    setcurrencies([...currencies,currency])
    setStarts([...starts, startDate]);
    setEnds([...ends, endDate]);
    setreference("");
    setTrip("");
    setBusinessPurpose("");
    setStartDate("");
    setEndDate("");
    handleDialogClose();
    const data = {
        'amount' : amount,
        'date' : startDate,
        'paid_through' : cash,
        'reference' : reference,
        'notes' : businessPurpose,
       'trip' : trip,
       'paid_type':currency
    }
    console.log(data);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setamount("");
    setCash("");
    setreference("");
    setBusinessPurpose("");
    setStartDate("");
    setEndDate("");
    setCurrency("");
  };

  const handleSelect = () => {
    setSelect(true);
    setSelect1(false);
  };
  const handleSelect1 = () => {
    setSelect1(true);
    setSelect(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleHead = (heading) => {
    handleSelect1();
    handleClose();
    setHead(heading);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.leftitems}>
          <div
            onClick={handleSelect}
            className={select ? styles.heading : styles.heading2}
          >
            <Typography variant="h6">Pending Advances</Typography>
          </div>
          <div
            onClick={handleSelect1}
            className={select1 ? styles.heading : styles.heading2}
          >
            <Typography variant="h6">{head} Advances</Typography>
          </div>
          <div className={styles.downbutton}>
            <Button
              className={styles.downbutton1}
              variant="none"
              id="basic-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ArrowDropDown />
            </Button>
            <Menu
              className={styles.dropdown}
              elevation={1}
              id="fade-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <span className={styles.dropdownhead}>DEFAULT</span>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("All")}
              >
                All
              </MenuItem>
              <MenuItem
                className={styles.menuitem}
                onClick={() => handleHead("Reported")}
              >
                Reported
              </MenuItem>
              
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose}>
                <span className={styles.customview}>+ New Custom View</span>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className={styles.rightitems}>
          <div>
            <button className={styles.new} onClick={handleDialogOpen}>
              + Record Advances
            </button>
          </div>
          <div>
            <Button
              className={styles.iconbutton}
              id="basic-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
            >
              <img src="https://img.icons8.com/ios-glyphs/18/000000/ellipsis.png" />
            </Button>
            <Menu
              className={styles.dropdown}
              elevation={0.5}
              id="fade-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <span className={styles.dropdownhead}>SORT BY</span>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Created Time
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Report#
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Report Name
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Status
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Approver
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                Total
              </MenuItem>
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                To be reimbursed
              </MenuItem>
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                <img src="https://img.icons8.com/material-outlined/20/000000/refresh.png" />{" "}
                Refresh List
              </MenuItem>
              <hr />
              <MenuItem className={styles.menuitem} onClick={handleClose1}>
                <img src="https://img.icons8.com/ios/20/000000/low-importance.png" />{" "}
                Import Reports
              </MenuItem>
            </Menu>
          </div>
          <div>
            <button className={styles.help}>
              {/* <img src="https://img.icons8.com/fluency/23/000000/question-mark.png" /> */}
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </div>
        </div>
      </div>
      {names.length == 0 && select && (
        <div className={styles.pendingempty}>
          <div className={styles.image}>
            <Image src={HomeImage} />
          </div>
          <div className={styles.texts}>
            <Typography className={styles.business} variant="h5">
              Report business expenses
            </Typography>
            <br />
            <Typography className={styles.bodytext} variant="body1">
              Expense claims need to be added to a report before submitting for
              approval and reimbursement. Create and access reports here.
            </Typography>
            <br />
            <button className={styles.new} onClick={handleDialogOpen}>
              + New Advance
            </button>
          </div>
          <div className={styles.lifecycle}>
            <Typography variant="h6">
              Life cycle of an Expense Report
            </Typography>
            <Image src={LifeCycle} />
          </div>
        </div>
      )}
      {names.length == 0 && select1 && (
        <div className={styles.pendingempty}>
          <div className={styles.image}>
            <Image src={HomeImage} />
          </div>
          <div className={styles.texts}>
            <Typography className={styles.business} variant="h5">
              Report business expenses
            </Typography>
            <br />
            <Typography className={styles.bodytext} variant="body1">
              Expense claims need to be added to a report before submitting for
              approval and reimbursement. Create and access reports here.
            </Typography>
            <br />
            <button className={styles.new} onClick={handleDialogOpen}>
              + New Report
            </button>
          </div>
          <div className={styles.lifecycle}>
            <Typography variant="h6">
              Life cycle of an Expense Report
            </Typography>
            <Image src={LifeCycle} />
          </div>
        </div>
      )}
      {names.length > 0 &&
        select &&
        names.map((name, index) => (
          <div className={styles.boxreport}>
            <div className={styles.boxhead}>
              <Typography variant="h5">{name}</Typography>
              <button onClick={() => handleDelete(index)}>
                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png" />
              </button>
            </div>
            <hr className={styles.boxline} />
            <table>
              <tr>
                <th style={{ opacity: "0.7" }}>Duration</th>
                <th style={{ opacity: "0.7" }}>Expenses</th>
                <th style={{ opacity: "0.7" }}>Total</th>
                <th style={{ opacity: "0.7" }}>Amount to be Reimbursed</th>
              </tr>
              <tr>
                <td>
                  {starts[index]} / {ends[index]}
                </td>
                <td>0</td>
                <td>&#8377; 0.00</td>
                <td>&#8377; 0.00</td>
              </tr>
            </table>
          </div>
        ))}
      {names.length > 0 && select1 && (
        <div className={styles.report}>
          <table>
            <tr>
              <th>REPORT NAME</th>
              <th>STATUS</th>
              <th>APPROVER</th>
              <th>TOTAL</th>
              <th>TO BE REIMBURSED</th>
              <th>
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/24/000000/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png" />
              </th>
            </tr>
            {names.map((name, index) => (
              <tr>
                <td>
                  <span className={styles.reporthead}>{name}</span> <br />{" "}
                  {starts[index]} / {ends[index]}
                </td>
                <td>DRAFT</td>
                <td>-</td>
                <td>&#8377; 0.00</td>
                <td>&#8377; 0.00</td>
                <td>
                  <button onClick={() => handleDelete(index)}>
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png" />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
      <Dialog
        open={dialogopen}
        onClose={handleDialogClose}
        className={styles.dialog}
      >
        <DialogTitle>
          <div className={styles.dialoghead}>
            <h4>Record Advance</h4>
            <i
              className="fas fa-window-close"
              id={styles.close}
              onClick={handleDialogClose}
            ></i>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={styles.fieldContainer}>
            <h5 style={{ color: "#b94a48" }}>Amount</h5>
            <div style={{display:"flex"}}>
         
            <FormControl
        sx={{
          m: 1,
          minWidth: 80,
          width: "70px",
          height: "25x",
        }}
      >
        <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        inputProps={{ "aria-label": "Without label" }}
        placeholder="INR"
       
        >
         
          <MenuItem value="INR">INR-Indian Rupee</MenuItem>
          <MenuItem value="AED">AED-UAE Dirham</MenuItem>
          <MenuItem value="AUD">AUD-Australian Dollar</MenuItem>
          <MenuItem value="CAD">CAD-Candian Dollar</MenuItem>
          <MenuItem value="CNY">CNY-Yuan Renminbi</MenuItem>
          <MenuItem value="EUR">EUR-Euro</MenuItem>
          <MenuItem value="GBP">GBP-pound Sterling</MenuItem>
          <MenuItem value="JPY">JPY-Japnese Yen</MenuItem>
          <MenuItem value="SAR">SAR- Saudi Riyai</MenuItem>
          <MenuItem value="USD">USD-United States Dollar</MenuItem>
          <MenuItem value="ZAR">ZAR-South African Rand</MenuItem>
       

    </Select> 
     </FormControl>
              <TextField
                autoFocus
                value={amount}
                onChange={(e) =>setamount(e.target.value)}
                className={styles.textfield}
                style={{marginLeft:"-10px",marginTop:"8px",height:"25px"}}
              />

            </div>
           
              <h5>Date</h5>
              <div className={styles.duration}>
                <TextField
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  className={styles.durfield}
                />
                {/* <TextField
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  className={styles.durfield}
                /> */}
              </div>
              <h5>Paid Through</h5>
              <FormControl
        sx={{
          m: 1,
          minWidth: 120,
         width: "350px",
          height: "100px",
        }}
      >
        <Select
        value={cash}
        onChange={(e) => setCash(e.target.value)}
        inputProps={{ "aria-label": "Without label" }}
        placeholder="Pretty Cash"
        className={styles.textfield}
        style={{marginLeft:"-10px"}}
        >
         
          <MenuItem value="Petty Cash">Petty Cash</MenuItem>
          <MenuItem value="Undepoisted Fund">Undepoisted Fund</MenuItem>
          <MenuItem value="TDS Payable">TDS Payable</MenuItem>
      
        </Select> 
     </FormControl>
              {/* <TextField
                value={trip}
                onChange={(e) => setTrip(e.target.value)}
                placeholder="Pretty Cash"
                className={styles.textfield}
              /> */}
              <h5 style={{ color: "#b94a48" }}>Reference#</h5>
              <TextField
                autoFocus
                value={reference}
                onChange={(e) =>setreference(e.target.value)}
                className={styles.textfield}
              />
              <h5>Notes</h5>
              <TextField
                value={businessPurpose}
                onChange={(e) => setBusinessPurpose(e.target.value)}
                placeholder="max 500 characters"
                className={styles.textfield}
              />
              <h5>Apply to Trip</h5>
              <TextField
                value={trip}
                onChange={(e) => setTrip(e.target.value)}
           
                className={styles.textfield}
              />
              
              
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleData}
            className={styles.new}
          >
            Record Advance
          </Button>
          <Button
            variant="outlined"
            onClick={handleDialogClose}
            className={styles.cancelButton}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

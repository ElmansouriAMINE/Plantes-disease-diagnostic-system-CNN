/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { useState } from "react";
// Billing page components
import Invoice from "layouts/billing/components/Invoice";

import { FormControl,Box, CircularProgress , InputLabel, Select, MenuItem} from "@mui/material";

function Invoices(props) {
  const { invoices } = props;
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Card style={{marginTop:"20px"}} id="delete-account" sx={{ height: "100%" }}>
      {/* <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Invoices
        </SoftTypography>
        <SoftButton variant="outlined" color="info" size="small">
          view all
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </SoftBox>
      </SoftBox> */}
      <div>
      <h4 className="text-center">Recommendations</h4>
      <ul>
        {/* {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.date} - ${invoice.amount}
          </li>
        ))} */}
      </ul>
      </div>

      
    </Card>
  );
}

export default Invoices;

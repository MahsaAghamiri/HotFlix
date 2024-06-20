import styled from "styled-components";
import { palet } from "../../Style/them";

const ContactsStyle = styled.div`
.contacts{
    padding-top: 150px;
     .contacts-header{
           border-bottom: 1px solid #222028;
        span{
            padding:0 20px;
            border-bottom: 2px solid ${palet.primarycolor};
        }
    }
    .contacts-content{
          padding: 30px;
            line-height: 30px;
            min-height: 250px;
            border-radius: 8px;
            border: 1px solid #222028;
            margin-top: 50px;
    }
}
`;
export default ContactsStyle;
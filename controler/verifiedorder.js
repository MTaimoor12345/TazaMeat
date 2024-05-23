
import verifiedorderModel from "../models/verifiedorder.js";

class verifiedordercontroler {
static createDoc = async (req, res) => {
    try {
        // Extract the ID from the URL parameter
        const { id } = req.params;

        // Extract other data from the request body
        const { Animal, Eid, CNIC, name, fname, number, Address, qpdetail1, qpdetail2, qpdetail3, qpdetail4, qpdetail5, qpdetail6, qpdetail7, quantity, totalPrice } = req.body;
        
        // Create a new document with the extracted data
        const doc = new verifiedorderModel({
            _id: id, // Assign the extracted ID to _id field
            Animal: Animal,
            Eid: Eid,
            CNIC: CNIC,
            name: name,
            fname: fname,
            number: number,
            Address: Address,
            qpdetail1: qpdetail1,
            qpdetail2: qpdetail2,
            qpdetail3: qpdetail3,
            qpdetail4: qpdetail4,
            qpdetail5: qpdetail5,
            qpdetail6: qpdetail6,
            qpdetail7: qpdetail7,
            quantity: quantity,
            totalPrice: totalPrice
        });

        // Save the document to the database
        const result = await doc.save();
        console.log(result);

        // Redirect the user to the submission page
        res.redirect("/order");
    } catch (error) {
        console.log(error);
        // Handle errors appropriately (e.g., display an error page)
        res.status(500).send("Internal Server Error");
    }
}


static getAll =(req,res)=>{
    res.render("verifiedorder");
}
}
export default verifiedordercontroler;
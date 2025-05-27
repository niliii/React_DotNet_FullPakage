import React from "react";
import { getRandomUser } from "../../Utility/api";

export default function AddRandomComponents(props) {
  const GetRandomContacts = async () => {
    const responseFormAPI = await getRandomUser();

    console.log(responseFormAPI); // لاگ برای بررسی
    const user = responseFormAPI.data.results[0]; // ✅ دسترسی صحیح به داده

    const newContact = {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
    };

    props.handleAddRandomContact(newContact);
  };

  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={GetRandomContacts}
      >
        افزودن مخاطب تصادفی
      </button>
    </div>
  );
}

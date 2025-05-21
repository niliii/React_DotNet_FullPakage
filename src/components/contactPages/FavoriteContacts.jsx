import Contact from "./Contact";
const FavoriteContacts = (props) => {
  const contactListe = props.contactListe || [];

  return (
    <div className="col-12 py-2">
      <div className="text-center text-black">favorite</div>
      <div >
        {contactListe.map((contact, index) => (
          <Contact contact={contact} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;

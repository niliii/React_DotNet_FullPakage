import Contact from "./Contact";
const FavoriteContacts = (props) => {
  const contactListe = props.contactListe || [];

  return (
    <div>
    
      {contactListe.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default FavoriteContacts;

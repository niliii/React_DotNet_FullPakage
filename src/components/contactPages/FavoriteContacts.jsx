import Contact from "./Contact";

const FavoriteContacts = ({ contacts, favoriteClick,handleDeleteContact }) => {
  const favoriteContacts = contacts.filter((contact) => contact.favorite === true);

  return (
    <div className="col-12 py-2">
      <div className="text-center text-black">Favorite Contacts</div>
      <div>
        {favoriteContacts.map((contact, index) => (
          <Contact
            contact={contact}
            key={index}
            favoriteClick={favoriteClick}
            deleteContact={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;

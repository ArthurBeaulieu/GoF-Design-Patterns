package design.patterns.factory.dao.test;

import java.util.ArrayList;
import java.util.List;

import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.metier.Contact;

public class ContactTestDAO implements ContactDAO {

	@Override
	public List<Contact> getAllContacts() {
		List<Contact> contacts = new ArrayList<Contact>();
		contacts.add(new Contact("LAGAFFE","Gaston"));
		contacts.add(new Contact("BLANSEC","Adéle"));
		return contacts;
	}

}

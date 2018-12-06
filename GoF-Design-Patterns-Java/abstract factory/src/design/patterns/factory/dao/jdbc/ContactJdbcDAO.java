package design.patterns.factory.dao.jdbc;

import java.util.ArrayList;
import java.util.List;

import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.metier.Contact;

public class ContactJdbcDAO implements ContactDAO {

	@Override
	public List<Contact> getAllContacts() {
		return new ArrayList<Contact>();
	}

}

package design.patterns.factory.dao;

import java.util.List;

import design.patterns.factory.metier.Contact;

public interface ContactDAO {
	public List<Contact> getAllContacts();
}

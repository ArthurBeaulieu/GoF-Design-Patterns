package design.patterns.factory.dao.test;

import design.patterns.factory.dao.AdresseDAO;
import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.dao.AbstractDaoFactory;

public class TestDaoFactory implements AbstractDaoFactory {

	@Override
	public AdresseDAO getAdresseDAO() {
		return new AdresseTestDao();
	}

	@Override
	public ContactDAO getContactDAO() {
		return new ContactTestDAO();
	}

}

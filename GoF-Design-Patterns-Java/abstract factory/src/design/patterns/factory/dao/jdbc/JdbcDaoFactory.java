package design.patterns.factory.dao.jdbc;

import design.patterns.factory.dao.AdresseDAO;
import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.dao.AbstractDaoFactory;

public class JdbcDaoFactory implements AbstractDaoFactory {

	@Override
	public AdresseDAO getAdresseDAO() {
		return new AdresseJdbcDAO();
	}

	@Override
	public ContactDAO getContactDAO() {
		return new ContactJdbcDAO();
	}

}

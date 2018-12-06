package design.patterns.factory.dao.hibernate;

import design.patterns.factory.dao.AdresseDAO;
import design.patterns.factory.dao.ContactDAO;
import design.patterns.factory.dao.AbstractDaoFactory;

public class HibernateDaoFactory implements AbstractDaoFactory {

	@Override
	public AdresseDAO getAdresseDAO() {
		return new AdresseHibernateDAO();
	}

	@Override
	public ContactDAO getContactDAO() {
		return new ContactHibernateDAO();
	}

}

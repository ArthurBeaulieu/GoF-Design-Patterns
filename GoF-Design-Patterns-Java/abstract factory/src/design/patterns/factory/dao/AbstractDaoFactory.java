package design.patterns.factory.dao;

public interface AbstractDaoFactory {
	public AdresseDAO getAdresseDAO();
	public ContactDAO getContactDAO();
}

package gof;

public class Contact {
	private String nom;
	private String age;
	
	
	public Contact(String nom, String age) {
		this.nom = nom;
		this.age = age;
	}
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
	public Memento<Contact> createMemento(){
		return new ContactMemento(nom, age) ;
	}
	
	public void setMemento(Memento<Contact> memento){
		Contact c = memento.getState();
		this.age = c.age;
		this.nom = c.nom;
	}
	
	private class ContactMemento implements Memento<Contact>{
		private String nom;
		private String age;
		public ContactMemento(String nom, String age) {
			this.nom = nom;
			this.age = age;
		}
		@Override
		public Contact getState() {
			return new Contact(nom, age);
		}
		@Override
		public void setState(Contact t) {
			nom = t.getNom();
			age = t.getAge();			
		}
	}

	@Override
	public String toString() {
		return "Contact [nom=" + nom + ", age=" + age + "]";
	}
}

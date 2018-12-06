package gof;

public interface ListeAbstraite<T> 
{
	public Iterateur<T> getIterateur();
	public void add(T item);
}

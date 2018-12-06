package gof;

public class TableauConcret<T> implements ListeAbstraite<T> {

	@Override
	public Iterateur<T> getIterateur() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(T item) {
		// TODO Auto-generated method stub
		
	}

	private class IterateurConcret<T> implements Iterateur<T>{

		@Override
		public boolean hasNext() {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public T next() {
			// TODO Auto-generated method stub
			return null;
		}
		
	}



}

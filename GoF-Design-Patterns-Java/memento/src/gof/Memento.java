package gof;

public interface Memento<T> {
	T getState();
	void setState(T  t);
}
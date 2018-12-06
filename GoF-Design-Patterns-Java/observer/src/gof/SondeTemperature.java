package gof;

import java.util.*;

public class SondeTemperature extends ObservableAdapter {

	private int temp=0;

	public int getMesure()
	{return temp;}
	
	public void setTemperature(int t)
	{
		temp=t;
		notifier();
	}
}

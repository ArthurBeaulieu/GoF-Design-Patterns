package gof;

import java.util.ArrayList;
import java.util.List;

public class Container extends Widget {
	private List<Widget> widgets = new ArrayList<Widget>();
	
	public Container(String name) {
		super(name);
	}
	
	public void add(Widget w){
		widgets.add(w);
	}

	@Override
	public void show() {
		for(Widget w : widgets){
			w.show();
		}

	}

}

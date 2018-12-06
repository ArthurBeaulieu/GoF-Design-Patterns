#ifndef __ITERATOR__H__
#define __ITERATOR__H__
template <typename T>class Iterator{
public:
	virtual void first()=0;
	virtual void next()=0;
	virtual bool isDone()=0;
	virtual T & currentItem()=0;
};
#endif

type Page={
    title:string;
    likes:number;
    accounts:string[];
    status:string;
    details?:{
        createAt:string;
        updateAt:string;
    }
}
let page1:Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01').toISOString(),
      updateAt: new Date('2021-05-01').toISOString(),
    }
  }
  
  let page2:Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }
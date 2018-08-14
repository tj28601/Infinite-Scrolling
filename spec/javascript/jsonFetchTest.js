// import App from '../../app/javascript/react/containers/app';
// import fetchMock from 'fetch-mock';
//
// describe('JSON Fetch', () => {
//
// let wrapper;
// let news;
//
// beforeEach(() => {
//   news = [
//     {title: "Stellar Biotechnologies Reports Third Quarter Financial Results", published: "2018-08-08 07:45:00"}
//   ]
//   fetchMock.get('https://www.stellarbiotechnologies.com/media/press-releases/json', {
//     status: 200,
//     body: news
//   });
//   wrapper = mount(
//     <App />
//   )
// //   wrapper.setProps({ title: "Stellar Biotechnologies Reports Third Quarter Financial Results",
// //   published: "2018-08-08 07:45:00" })
// // });
// })
//
// afterEach(fetchMock.restore)
//
// describe('article', () => {
//   it('renders an li', () => {
//     expect(wrapper.find('li')).toBePresent()
//     // expect(wrapper.find('li').length()).toEqual(100)
//   })
//
//   it('renders a list item for each item returned from the api call', (done) => {
//     setTimeout(() => {
//        expect(wrapper.find('li').at(0)).toHaveText('Rent: $1700/month')
//       // expect(wrapper.find('li').length).toEqual(news.length)
//       // expect(wrapper.find('li').text()).toEqual(news[0].title)
//       done()
//     }, 0)
//   })
//   })
// })

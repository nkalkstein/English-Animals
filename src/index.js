document.addEventListener('DOMContentLoaded', () => {
  Adapter.getAnimals().then(Animal.setAnimals);
  Adapter.getUsers().then(User.setUsers);
  User.renderUserForm();
  EventListener.userListener();
})

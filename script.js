const rows = [
  { id: 1, title: 'Nam eget tellus ut turpis posuere ornare.', body: 'In velit nisl, facilisis et posuere vitae, imperdiet nec lacus. Vestibulum eget diam porttitor, luctus lorem in, hendrerit metus. In eu justo nibh. Mauris eleifend, nulla id interdum hendrerit, augue orci hendrerit neque, a vestibulum felis orci non elit. Duis dictum sagittis rutrum. Integer posuere ut felis sed bibendum. Aliquam facilisis ornare nisi vitae semper.' },
  { id: 2, title: 'Sed condimentum est nec tempus pretium.', body: 'Pellentesque eget sem vestibulum, interdum sem fringilla, sodales justo. Fusce a varius orci. Nam interdum lectus tellus. Integer euismod, quam vitae interdum imperdiet, orci massa venenatis orci, vel mattis elit risus quis nulla. Fusce ac ipsum ligula. Mauris facilisis, lacus a gravida sodales, justo purus luctus enim, in commodo diam nisl ut tellus. Donec fringilla ipsum ultricies ex mollis tristique.' },
  { id: 3, title: 'Praesent nec lacus vestibulum, vulputate ipsum in, consectetur orci.', body: 'Quisque at odio ut turpis mollis fringilla. Phasellus vel placerat sapien, in suscipit nisi. Morbi vitae risus non eros facilisis dignissim. Nunc at neque tortor. Nulla facilisi. Curabitur lobortis vulputate turpis, sed feugiat lacus tincidunt non. Morbi a pulvinar enim, et imperdiet sem. Integer elementum est mauris, vel commodo tortor laoreet id. Aliquam ac mollis sem, vitae egestas nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id scelerisque magna. Etiam eu hendrerit turpis.' },
  { id: 4, title: 'Pellentesque porta lacus sed mattis gravida', body: 'Fusce sit amet ligula nunc. Vivamus lorem eros, laoreet a viverra vel, sodales a magna. Sed vitae erat vel felis auctor tempus. Sed eget nibh imperdiet, venenatis tellus vel, suscipit erat. Proin eu consequat sem, in hendrerit ligula. Sed metus ante, lobortis eget laoreet fermentum, euismod eget quam. Donec imperdiet eros dolor, sed blandit nisl imperdiet consequat. Ut commodo tortor a leo tristique, id sollicitudin dui molestie. Vestibulum laoreet augue ac tortor bibendum volutpat.' },
  { id: 5, title: 'Morbi sit amet ex id ante luctus pellentesque.', body: 'Integer dui augue, fermentum id viverra molestie, tempus nec diam. Etiam purus nisl, aliquet ut est sed, ullamcorper dictum sapien. Suspendisse vehicula bibendum tempus. Vivamus lacinia, nibh non facilisis ultricies, neque sem rhoncus quam, vitae scelerisque nulla enim at risus. In efficitur justo nunc, sed tempus tellus venenatis eget.' }
];

const tableBody = document.getElementById('table-body');

const renderTable = () => {
  tableBody.innerHTML = '';
  rows.forEach(row => {
    let rowHTML = `
      <tr id="row-${row.id}">
        <td class="text-center p-3">${row.title}</td>
        ${row.body ? `<td>${row.body}</td>` : ''}
        <td class="text-center p-3 ">
          <button class="btn btn-warning btn-sm mx-3" onclick="updatePost(${row.id})">Update</button>
          <button class="btn btn-danger btn-sm" onclick="deletePost(${row.id})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += rowHTML;
  });
};

const deletePost = (id) => {
  const index = rows.findIndex(row => row.id === id);
  if (index !== -1) {
    rows.splice(index, 1); 
    renderTable(); 
  }
};


renderTable();

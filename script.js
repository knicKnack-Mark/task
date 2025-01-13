const rows = [
  { id: 1, 
    title: 'Nam eget tellus ut turpis posuere ornare.', 
    body: 'In velit nisl, facilisis et posuere vitae, imperdiet nec lacus. Vestibulum eget diam porttitor, luctus lorem in, hendrerit metus. In eu justo nibh. Mauris eleifend, nulla id interdum hendrerit, augue orci hendrerit neque, a vestibulum felis orci non elit. Duis dictum sagittis rutrum. Integer posuere ut felis sed bibendum. Aliquam facilisis ornare nisi vitae semper.' 
  },
  { id: 2,
     title: 'Sed condimentum est nec tempus pretium.', 
     body: 'Pellentesque eget sem vestibulum, interdum sem fringilla, sodales justo. Fusce a varius orci. Nam interdum lectus tellus. Integer euismod, quam vitae interdum imperdiet, orci massa venenatis orci, vel mattis elit risus quis nulla. Fusce ac ipsum ligula. Mauris facilisis, lacus a gravida sodales, justo purus luctus enim, in commodo diam nisl ut tellus. Donec fringilla ipsum ultricies ex mollis tristique.' 
    },
  { id: 3, 
    title: 'Praesent nec lacus vestibulum, vulputate ipsum in, consectetur orci.', 
    body: 'Quisque at odio ut turpis mollis fringilla. Phasellus vel placerat sapien, in suscipit nisi. Morbi vitae risus non eros facilisis dignissim. Nunc at neque tortor. Nulla facilisi. Curabitur lobortis vulputate turpis, sed feugiat lacus tincidunt non. Morbi a pulvinar enim, et imperdiet sem. Integer elementum est mauris, vel commodo tortor laoreet id. Aliquam ac mollis sem, vitae egestas nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id scelerisque magna. Etiam eu hendrerit turpis.' 
  },
  { id: 4, 
    title: 'Pellentesque porta lacus sed mattis gravida', 
    body: 'Fusce sit amet ligula nunc. Vivamus lorem eros, laoreet a viverra vel, sodales a magna. Sed vitae erat vel felis auctor tempus. Sed eget nibh imperdiet, venenatis tellus vel, suscipit erat. Proin eu consequat sem, in hendrerit ligula. Sed metus ante, lobortis eget laoreet fermentum, euismod eget quam. Donec imperdiet eros dolor, sed blandit nisl imperdiet consequat. Ut commodo tortor a leo tristique, id sollicitudin dui molestie. Vestibulum laoreet augue ac tortor bibendum volutpat.' 
  },
  { id: 5, 
    title: 'Morbi sit amet ex id ante luctus pellentesque.', 
    body: 'Integer dui augue, fermentum id viverra molestie, tempus nec diam. Etiam purus nisl, aliquet ut est sed, ullamcorper dictum sapien. Suspendisse vehicula bibendum tempus. Vivamus lacinia, nibh non facilisis ultricies, neque sem rhoncus quam, vitae scelerisque nulla enim at risus. In efficitur justo nunc, sed tempus tellus venenatis eget.' 
  },
  { 
    id: 6, 
    title: 'Praesent nec lacus vestibulum, vulputate ipsum in, consectetur orci.', 
    body: 'Quisque at odio ut turpis mollis fringilla. Phasellus vel placerat sapien, in suscipit nisi. Morbi vitae risus non eros facilisis dignissim. Nunc at neque tortor. Nulla facilisi. Curabitur lobortis vulputate turpis, sed feugiat lacus tincidunt non. Morbi a pulvinar enim, et imperdiet sem. Integer elementum est mauris, vel commodo tortor laoreet id. Aliquam ac mollis sem, vitae egestas nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id scelerisque magna. Etiam eu hendrerit turpis.' 
  },
  { 
    id: 7, 
    title: 'Nam eget tellus ut turpis posuere ornare.', 
    body: 'In velit nisl, facilisis et posuere vitae, imperdiet nec lacus. Vestibulum eget diam porttitor, luctus lorem in, hendrerit metus. In eu justo nibh. Mauris eleifend, nulla id interdum hendrerit, augue orci hendrerit neque, a vestibulum felis orci non elit. Duis dictum sagittis rutrum. Integer posuere ut felis sed bibendum. Aliquam facilisis ornare nisi vitae semper.' 
  },
  { 
    id: 8, 
    title: 'Pellentesque porta lacus sed mattis gravida', 
    body: 'Fusce sit amet ligula nunc. Vivamus lorem eros, laoreet a viverra vel, sodales a magna. Sed vitae erat vel felis auctor tempus. Sed eget nibh imperdiet, venenatis tellus vel, suscipit erat. Proin eu consequat sem, in hendrerit ligula. Sed metus ante, lobortis eget laoreet fermentum, euismod eget quam. Donec imperdiet eros dolor, sed blandit nisl imperdiet consequat. Ut commodo tortor a leo tristique, id sollicitudin dui molestie. Vestibulum laoreet augue ac tortor bibendum volutpat.' 
  },
  { 
    id: 9, 
    title: 'Morbi sit amet ex id ante luctus pellentesque.', 
    body: 'Integer dui augue, fermentum id viverra molestie, tempus nec diam. Etiam purus nisl, aliquet ut est sed, ullamcorper dictum sapien. Suspendisse vehicula bibendum tempus. Vivamus lacinia, nibh non facilisis ultricies, neque sem rhoncus quam, vitae scelerisque nulla enim at risus. In efficitur justo nunc, sed tempus tellus venenatis eget.' 
  },
  { 
    id: 10,
     title: 'Sed condimentum est nec tempus pretium.', 
     body: 'Pellentesque eget sem vestibulum, interdum sem fringilla, sodales justo. Fusce a varius orci. Nam interdum lectus tellus. Integer euismod, quam vitae interdum imperdiet, orci massa venenatis orci, vel mattis elit risus quis nulla. Fusce ac ipsum ligula. Mauris facilisis, lacus a gravida sodales, justo purus luctus enim, in commodo diam nisl ut tellus. Donec fringilla ipsum ultricies ex mollis tristique.' 
  },
  { 
    id: 8, 
    title: 'Pellentesque porta lacus sed mattis gravida', 
    body: 'Fusce sit amet ligula nunc. Vivamus lorem eros, laoreet a viverra vel, sodales a magna. Sed vitae erat vel felis auctor tempus. Sed eget nibh imperdiet, venenatis tellus vel, suscipit erat. Proin eu consequat sem, in hendrerit ligula. Sed metus ante, lobortis eget laoreet fermentum, euismod eget quam. Donec imperdiet eros dolor, sed blandit nisl imperdiet consequat. Ut commodo tortor a leo tristique, id sollicitudin dui molestie. Vestibulum laoreet augue ac tortor bibendum volutpat.' 
  }
];


const tableBody = document.getElementById('table-body');

const rowsPerPage = 7; 
let currentPage = 1;

const renderTable = (page = 1) => {
  tableBody.innerHTML = '';

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedRows = rows.slice(start, end);

  paginatedRows.forEach(row => {
    let rowHTML = `
      <tr id="row-${row.id}" class="w-100 d-table">
        <td class="text-center p-3">${row.title}</td>
        ${row.body ? `<td>${row.body}</td>` : ''}
        <td class="p-4 ">
          <div class="d-flex justify-content-center gap-3"> 
            <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Update
            </button>
            <button class="btn btn-danger btn-sm" onclick="deletePost(${row.id})">
              Delete
            </button>
          </div>
        </td>
      </tr>


      <!-- THIS IS THE MODAL -->

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Text</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="title-name" class="col-form-label">Title:</label>
                  <input type="text" class="form-control" id="title-name">
                </div>
                <div class="mb-3">
                  <label for="body-text" class="col-form-label">Body:</label>
                  <textarea class="form-control" id="body-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>

    `;
    tableBody.innerHTML += rowHTML;
  });

  renderPagination();
};

const renderPagination = () => {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  //Previous button
  pagination.innerHTML += `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
    </li>
  `;

  //Page number buttons
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <li class="page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
      </li>
    `;
  }

  //Next button
  pagination.innerHTML += `
    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
    </li>
  `;
};

const changePage = (page) => {
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  if (page < 1 || page > totalPages)
     return; // Prevent invalid page numbers
  currentPage = page;
  renderTable(currentPage);
};

const deletePost = (id) => {
  const index = rows.findIndex(row => row.id === id);
  if (index !== -1) {
    rows.splice(index, 1);
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    if (currentPage > totalPages) currentPage = totalPages; // Adjust current page if needed
    renderTable(currentPage);
  }
};

renderTable(currentPage);
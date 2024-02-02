const GenresNavBar = () => (
 <div class="d-flex justify-content-between">
  <div class="d-flex">
   <h2 class="mb-4">TV Shows</h2>
   <div class="btn-group" role="group">
    <div class="dropdown ms-4 mt-1">
     <button
      type="button"
      class="btn btn-secondary btn-sm dropdown-toggle rounded-0"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{ backgroundColor: "#221f1f" }}
     >
      Genres
     </button>
     <ul class="dropdown-menu">
      <li>
       <a class="dropdown-item" href="..">
        Comedy
       </a>
      </li>
      <li>
       <a class="dropdown-item" href="..">
        Drama
       </a>
      </li>
      <li>
       <a class="dropdown-item" href="..">
        Thriller
       </a>
      </li>
     </ul>
    </div>
   </div>
  </div>
  <div>
   <i class="bi bi-grid icons"></i>
   <i class="bi bi-grid-3x3 icons"></i>
  </div>
 </div>
);

export default GenresNavBar;

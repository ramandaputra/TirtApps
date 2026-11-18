/**
 * Dashboard Aplikasi Pusimpel - script.js
 * Fitur:
 * 1. Animasi Staggered Grid Masuk Cepat
 * 2. Pencarian Real-Time (Judul & Kata Kunci)
 * 3. Filter Kategori Modul Ramping
 */

document.addEventListener("DOMContentLoaded", function () {
  initStaggerAnimation();
  initFilterAndSearch();
});

/**
 * Animasi kartu grid muncul secara berurutan
 */
function initStaggerAnimation() {
  const iconItems = document.querySelectorAll(".icon-grid .icon-item");
  let delay = 0;

  iconItems.forEach((item) => {
    setTimeout(() => {
      item.classList.add("animate-in");
    }, delay);
    delay += 20; // Kecepatan stagger yang sangat mulus untuk 64 modul
  });
}

/**
 * Fitur Pencarian & Filter Kategori Terpadu
 */
function initFilterAndSearch() {
  const searchInput = document.getElementById("searchModul");
  const clearBtn = document.getElementById("clearSearch");
  const filterButtons = document.querySelectorAll("#categoryFilter .pill-btn");
  const iconItems = document.querySelectorAll("#mainIconGrid .icon-item");
  const counterEl = document.getElementById("moduleCounter");
  const noResultBox = document.getElementById("noResult");
  const totalCount = iconItems.length;

  let currentCategory = "all";
  let currentSearchQuery = "";

  function applyFilter() {
    let matchCount = 0;

    iconItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category") || "";
      const itemTitle = (item.getAttribute("data-title") || item.innerText).toLowerCase();

      // Cek kecocokan kategori
      const matchesCategory = (currentCategory === "all") || (itemCategory === currentCategory);

      // Cek kecocokan pencarian
      const matchesSearch = (currentSearchQuery === "") || itemTitle.includes(currentSearchQuery);

      if (matchesCategory && matchesSearch) {
        item.style.display = "flex";
        matchCount++;
      } else {
        item.style.display = "none";
      }
    });

    // Update Counter
    if (counterEl) {
      if (currentSearchQuery !== "" || currentCategory !== "all") {
        counterEl.textContent = `${matchCount} Modul`;
      } else {
        counterEl.textContent = `${totalCount} Modul`;
      }
    }

    // Tampilkan pesan jika kosong
    if (noResultBox) {
      noResultBox.style.display = matchCount === 0 ? "flex" : "none";
    }
  }

  // Event Input Pencarian
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearchQuery = e.target.value.toLowerCase().trim();

      if (clearBtn) {
        clearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
      }

      applyFilter();
    });
  }

  // Tombol Hapus Pencarian
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      searchInput.value = "";
      currentSearchQuery = "";
      clearBtn.style.display = "none";
      applyFilter();
      searchInput.focus();
    });
  }

  // Tombol Filter Kategori
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      currentCategory = this.getAttribute("data-filter") || "all";
      applyFilter();
    });
  });

  // Tombol Escape untuk reset pencarian
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      currentSearchQuery = "";
      if (clearBtn) clearBtn.style.display = "none";
      applyFilter();
      searchInput.blur();
    }
  });
}

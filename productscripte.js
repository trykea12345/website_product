// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const skincareSection = document.querySelector('#skincare');
const skincareCards = skincareSection.querySelectorAll('.col-sm-6');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    skincareCards.forEach(card => {
      // Show all if "all" is selected
      if(category === 'all') {
        card.style.display = '';
      } else {
        // Here, match category by your own logic
        // For example, cards can have a data-category attribute for filtering
        if(card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });


// Modal control
const productModal = new bootstrap.Modal(document.getElementById('productModal'));
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

function openModal(title, description, imageUrl) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageUrl;
  productModal.show();
}

document.querySelectorAll('.wishlist-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});



const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
/* 🌙 Optional toggleMode() JavaScript  */

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}


document.addEventListener("DOMContentLoaded", () => {
  const wishlistIcons = document.querySelectorAll("#lip .wishlist-icon");

  // Load wishlist from localStorage or empty array
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Set active hearts on page load from wishlist
  wishlist.forEach(productId => {
    const icon = document.querySelector(`#lip .wishlist-icon[data-product-id="${productId}"]`);
    if (icon) {
      icon.classList.add("active");
    }
  });

  // Toggle wishlist state on icon click
  wishlistIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const productId = icon.getAttribute("data-product-id");
      if (icon.classList.contains("active")) {
        // Remove from wishlist
        icon.classList.remove("active");
        const index = wishlist.indexOf(productId);
        if (index > -1) wishlist.splice(index, 1);
      } else {
        // Add to wishlist
        icon.classList.add("active");
        wishlist.push(productId);
      }
      // Save updated wishlist back to localStorage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });

  // Add to Cart modal button example
  const addToCartButtons = document.querySelectorAll("#lip .modal-footer .btn-pink");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      const productName = modal.querySelector(".modal-title").textContent;
      alert(`Added "${productName}" to your cart! 🎉`);
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
    });
  });
});


document.querySelectorAll('.wishlist-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    icon.querySelector('i').classList.toggle('bi-heart-fill');
    icon.querySelector('i').classList.toggle('bi-heart');
  });
});

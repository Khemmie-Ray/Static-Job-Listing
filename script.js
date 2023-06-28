const containerCard = document.querySelector('.container')


fetch('data.json')
.then(response => response.json())
.then(data => {
    let dataCard = data.map(info => {
      const isNew = info.new ? 'new' : '';
      const isFeatured = info.featured ? 'featured' : '';

      const languages = info.languages.map(language => `<button>${language}</button>`).join('');
      const tools = info.tools.map(tool => `<button>${tool}</button>`).join('');

        return ` <div class="card">
        <div class="content">
          <img src=${info.logo} alt="">
          <div class="contentBox">
            <div class="card-title">
              <p class="company-name">${info.company}</p>
              ${info.new ? `<p class="new">${isNew}</p>` : ''}
              ${info.featured ? `<p class="featured">${isFeatured}</p>` : ''}
            </div>
            <h1>${info.position}</h1>
            <p class="timeRange">${info.postedAt} . <span>${info.level}</span> . <span>${info.location}</span></p>
          </div>
          </div>
        <div class="filter-button">
          ${languages}
          ${tools}
        </div>
      </div>`
    }).join('')

    containerCard.innerHTML = dataCard
})
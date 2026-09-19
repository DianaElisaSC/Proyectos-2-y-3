const companies = JSON.parse(content);

function CompanyCard(company) {

    this.symbol = company.symbol;

    this.name = company.companyName;

    this.day50 = company.stats.day50MovingAvg;
    this.day200 = company.stats.day200MovingAvg;

    this.revenue = company.stats.operatingRevenue - company.stats.costOfRevenue;

    
    this.capitalization50 = company.stats.day50MovingAvg * company.stats.sharesOutstanding;
    this.capitalization200 = company.stats.day200MovingAvg * company.stats.sharesOutstanding;

    
    this.equity = company.stats.totalAssets - company.stats.totalLiabilities;

    this.tags = company.tags;


    this.currency = (num) => {

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num);

    };

    this.billions = (num) => {

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
        }).format(num);

    };

    this.outputCard = () => {

        document.write(`
            <article class="card">
                <h2>${this.symbol} - ${this.name}</h2>
                <div>
                    <p>Share Price (50day avg): <span>${this.currency(this.day50)}</span></p>
                    <p>Share Price (200day avg): <span>${this.currency(this.day200)}</span></p>
                    <p>Market Cap (50day avg): <span>${this.billions(this.capitalization50)}</span></p>
                    <p>Market Cap (200day avg): <span>${this.billions(this.capitalization200)}</span></p>
                    <p>Net Revenue: <span>${this.billions(this.revenue)}</span></p>
                    <p>Shareholder Equity: <span>${this.billions(this.equity)}</span></p>
                </div>
                <footer>
                    ${this.tags.map(tag => `<small>${tag}</small>`).join("")}
                </footer>
            </article>
        `);

    };

}

function outputCompanyCards() {

    for (let i = 0; i < companies.length; i++) {

        const card = new CompanyCard(companies[i]);

        card.outputCard();

    }

}


outputCompanyCards();






const lookupErrors = [
  { name: "NoError", description: "No Error"},
  { name: "FormErr", description: "Format Error"},
  { name: "ServFail", description: "Server Failure"},
  { name: "NXDomain", description: "Non-Existent Domain"},
  { name: "NotImp", description: "Not Implemented"},
  { name: "Refused", description: "Query Refused"},
  { name: "YXDomain", description: "Name Exists when it should not"},
  { name: "YXRRSet", description: "RR Set Exists when it should not"},
  { name: "NXRRSet", description: "RR Set that should exist does not"},
  { name: "NotAuth", description: "Not Authorized"},
];

const lookupRecordTypes = {
  1: 'A',
  28: 'AAAA',
  257: 'CAA',
  5: 'CNAME',
  43: 'DS',
  48: 'DNSKEY',
  15: 'MX',
  2: 'NS',
  47: 'NSEC',
  50: 'NSEC3',
  46: 'RRSIG',
  6: 'SOA',
  16: 'TXT',
};

const formatDomain = (domain) => {
  domain = domain.replace(/^(http|https):\/\//, '').split('/')[0];

  return encodeURIComponent(domain);
};

const lookup = async (type, domain) => {
  if (!domain) {
    throw new Error('Missing domain input')
  }

  domain = domain.replace(/^(http|https):\/\//, '').split('/')[0];

  const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=${type.toUpperCase()}`;
  const options = {
    muteHttpExceptions: true,
    headers: {
      accept: 'application/dns-json',
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  if (response.status !== 200) {
    throw new Error(`Request failed with status code ${response.status}`);
  }

  if (result.Status !== 0) {
    const errorMessage = lookupErrors.at(result.Status)?.description ?? 'Unknown error';

    throw new Error(errorMessage);
  }

  if (!result.Answer) {
    throw new Error('No results found');
  }

  return result.Answer;
};

const submitForm = async () => {
  const resultContainer = document.getElementById('results');
  const locationInput = document.getElementById('location');
  const typeInput = document.getElementById('type');
  const domain = formatDomain(locationInput.value);
  const type = encodeURIComponent(typeInput.value);

  try {
    const result = await lookup(type, domain);
    const tableElement = document.createElement('table');
    const tableHeadElement = document.createElement('thead');
    const tableBodyElement = document.createElement('tbody');

    tableHeadElement.innerHTML = '<tr><th>Type</th><th>Name</th><th>Value</th><th>TTL</th></tr>';
    tableBodyElement.innerHTML = `<tr><td>${lookupRecordTypes[result[0].type]}</td><td>${result[0].name}</td><td>${result[0].data}</td><td>${result[0].TTL}</td></tr>`

    tableElement.append(tableHeadElement, tableBodyElement);

    resultContainer.replaceChildren(tableElement);
  } catch (err) {
    const preElement = document.createElement('pre');

    preElement.textContent = err.message;

    resultContainer.replaceChildren(preElement);
  }

  resultContainer.classList.remove('hidden');

  window.location.hash = `location=${domain}&type=${type}`;
}

const handleLocationHash = (hash) => {
  if (hash === '') return;

  const params = new URLSearchParams(hash.slice(1));
  const location = params.get('location');
  const type = params.get('type');

  console.log(params.values());

  if (location && type) {
    document.getElementById('location').value = location;
    document.getElementById('type').value = type;
    document.getElementById('submit').click();


    submitForm();
  }
}

const main = () => {
  document.getElementById('location').addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    submitForm();
  });

  document.getElementById('submit').addEventListener('pointerdown', submitForm);

  handleLocationHash(window.location.hash);
};

main();

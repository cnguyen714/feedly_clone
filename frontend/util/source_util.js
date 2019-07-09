
export const fetchSource = id => {
  return $.ajax({
    url: `api/sources/${id}`,
    method: `GET`
  });
};

export const createSource = source => {
  return $.ajax({
    url: `api/sources`,
    method: `POST`,
    data: {
      source: source
    }
  });
};

export const updateSource = source => {
  return $.ajax({
    url: `api/sources/${source.id}`,
    method: `PATCH`,
    data: {
      source: source
    }
  });
};

export const destroySource = id => {
  return $.ajax({
    url: `api/sources/${id}`,
    method: `DELETE`
  });
};


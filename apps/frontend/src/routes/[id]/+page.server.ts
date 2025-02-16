import { error } from '@sveltejs/kit';
import { PUBLIC_DOMAIN, PUBLIC_MAX_ID } from '$env/static/public';

export function load({ params, url }) {
  const id = Number(params.id);
  
  if (isNaN(id) || id < 1 || id > Number(PUBLIC_MAX_ID)) {
    throw error(404, { 
      message: `Non-existing serial number` 
    });
  }
  
  if (url.hostname !== PUBLIC_DOMAIN) {
    throw error(404, {
      message: `Invalid domain. Use ${PUBLIC_DOMAIN}`
    });
  }

  return { id };
}

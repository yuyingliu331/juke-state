

juke.config(function ($stateProvider) {
	$stateProvider.state('allAlbums', {
		url: '/albums/',
		templateUrl: '/js/album/album-template.html',
		controller: 'AlbumsCtrl'
	});
});

juke.config(function ($stateProvider) {
	$stateProvider.state('allArtists', {
		url: '/artists',
		templateUrl: '/js/artist/artist-template.html',
		controller: 'ArtistsCtrl'
	});
});

juke.config(function ($stateProvider) {
	$stateProvider.state('oneAlbum', {
		url: '/albums/:albumId',
		templateUrl: '/js/album/oneAlbum-template.html',
		controller: 'AlbumCtrl'
	});
});

juke.config(function ($stateProvider) {
	$stateProvider.state('oneArtist', {
		url: '/artists/:artistId',
		templateUrl: '/js/artist/oneArtist-template.html',
		controller: 'ArtistCtrl'
	});
});
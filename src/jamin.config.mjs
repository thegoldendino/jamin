export default {
	site: 'rvcd',
	schemaVersion: '0.0.1',
	startUrl: '/test-p-02',
	rootEl: '#svelte',
	global: {
		INFO_EMAIL: {
			label: 'Info Email',
			type: 'email'
		}
	},
	pages: {
		'/test-p-01': {
			PECAN_SEC: {
				label: 'Pecan Section',
				fields: {
					CLUBNAME: {
						label: 'Club Name',
						type: 'text'
					}
				}
			},
			BACON_SEC: {
				label: 'Bacon Section',
				fields: {
					FLAVORS: {
						label: 'Flavors',
						type: 'array',
						fields: {
							FLAVOR: {
								type: 'text'
							}
						}
					}
				}
			}
		},
		'/test-p-02': {
			BIRD_SEC: {
				label: 'Bird Section',
				fields: {
					KING_BIRD: {
						label: 'King Bird',
						fields: {
							NAME: {
								label: 'Name',
								type: 'text'
							},
							PHOTO: {
								label: 'Photo',
								type: 'image'
							}
						}
					}
				}
			},
			APPLE_SEC: {
				label: 'Apple Section',
				fields: {
					HONEYCRISPS: {
						label: 'Honeycrips',
						type: 'array',
						fields: {
							APPLE: {
								display: 'NAME',
								fields: {
									NAME: {
										label: 'Name',
										type: 'text'
									},
									BIO: {
										label: 'Biography',
										type: 'multiline'
									}
								}
							}
						}
					}
				}
			}
		}
	}
};

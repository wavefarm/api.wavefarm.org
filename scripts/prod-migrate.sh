set -e

esindexdump $ESURLPROD > tmp.ldj
curl -XDELETE $ESURLDEV
curl -XPUT $ESURLDEV -d @index.json
curl -XPOST $ESURLDEV/_bulk --data-binary @tmp.ldj

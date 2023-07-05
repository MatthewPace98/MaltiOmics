// https://docs.anychart.com/Basic_Charts/Timeline_Chart
anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
    'static/timeline/timeline.json',   
      function (data) {

        // create a timeline chart
        var chart = anychart.timeline();

        // create main timeline data points
        for (var i = 0; i < data.mainTimeline.length; i++) {    
          // create a range series
          var series = chart.range([
            [
              data.mainTimeline[i].title,
              data.mainTimeline[i].start,
              data.mainTimeline[i].end
            ]
          ]);
          series
          .tooltip()
          .useHtml(true)
          .titleFormat('{%x}')
          .format(
            data.mainTimeline[i].description
            + '<br/><br/>Start: <b>{%start}{type:date}</b><br/>End: <b>{%end}{type:date}</b>'
          );

        }

        // create a data set for the top data points
        //var dataSet = anychart.data.set(data.facts);

        // map the top data points
        //var mapping = dataSet.mapAs({
        //  x: 'date',
        //  value: 'title'
        //});

        // create the top series with moments
        //var mappingSeries = chart.moment(mapping);

        // create a data set for the bottom data points
        //var otherEventsDataset = anychart.data.set(data.otherEvents);

        // map the bottom data set
        //var otherEventsDatasetMapping = otherEventsDataset.mapAs({
        //  x: 'date',
        //  value: 'title'
        //});

        // create the bottom series with moments
        //var otherEventsSeries = chart.moment(otherEventsDatasetMapping);



      // set the direction for the series
      //otherEventsSeries.direction("down");
      
      // set tooltip settings for the Moderna series
      //otherEventsSeries
      //    .tooltip()
      //    .useHtml(true)
      //    .titleFormat('{%title}')
      //    .format(
      //      '{%description}'
      //      + '<br/><br/>Date: <b>{%date}{type:date}</b><br/>'
      //    );


        var lineMarker = chart.lineMarker(0);
        lineMarker.value(Date.UTC(2022,6,15));
        lineMarker.stroke("grey", 2, "10 5", "round");
        var UK_move = chart.textMarker(0);
        UK_move.value(Date.UTC(2022,6,15));
        UK_move.useHtml(true);
        UK_move.text("<br><span style='font-size:14'> Moved to <br> the UK </span>");
        UK_move.fontColor("grey");
        UK_move.fontWeight(800);

        chart.scroller().enabled(false);
        chart.interactivity().zoomOnMouseWheel(false);
        //chart.title('My Development');
        chart.container('container');
        chart.draw();

      }
    );
  });